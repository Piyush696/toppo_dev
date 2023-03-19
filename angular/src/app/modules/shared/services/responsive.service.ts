import {Injectable} from '@angular/core';
import {single} from 'rxjs/operators';
import {SiteVariableService} from './sitevariable.service';
declare var detectZoom: any;
declare var $: any;

// SERVICE DECORATOR AND CLASS NAME
@Injectable
({
  providedIn: 'root'
})

export class ResponsiveService
{
  // CLASS VARIABLES FOR THIS COMPONENT
  devicePixelRatio;
  containerWidth;
  containerHeight;
  mWidth;
  browserZoomLevel;
  actualZoom;
  globalFont: number = 16;
  buffer: number;
  
  // THIS WILL HOLD THE CONTENTS THAT WOULD BE LAID OUT AS PAGES. EACH ARRAY ITEM IS A PAGE.
  mainContentArray = [];
  
  // VARIABLES NEEDED TO DEFINE AND CALCULATE THE PAGES
  single_page_container: any;
  singlePageHTML: string;
  nextPage: boolean;
  pageHeight: number = 0;
  maxHeight: number = 0;
  maxWidth: number = 0;
  
  // SERVICE CONSTRUCTOR.. CALL THE SITEVARIABLES RIGHT HERE SO WE HAVE THE VALUES INITIALIZED WHEN SERVICE STARTS
  constructor (private siteVariableService: SiteVariableService)
  {
    // GETTING THE SITE VARIBALE
    this.buffer = (this.siteVariableService.variables.variables['SV-GLOBAL-RESPONSIVE-BUFFER']/100);
    this.globalFont = this.siteVariableService.variables.variables['SV-GLOBAL-FONTSIZE-REGULAR'];
  }
  
  // CALCULATE HOW MANY LINES OF THE GIVEN CONTENT WILL FIT WHEN THE CONTENT IS ALL TEXT
  calculateNumberOfLines (nodeText)
  {
    // THE CONTENT PASSED HERE DOES NOT HAVE ANY HTML.
    // SPLIT THE CONTENT INTO WORDS THAT WE WOULD LAY OUT AND COUNT
    let contentArray = nodeText.split (' ');
    document.getElementById ('test').innerHTML = ' ';
    let newContentArray = [];
    
    // SPLICING THE CONTENT LINE WISE
    var m = '';
    
    // THIS IS THE MAXIMUM WIDTH FOR A LINE OF TEXT THAT CAN GO IN THE CURRENT CONTAINER
    this.maxWidth = (this.containerWidth - (0.1 * this.containerWidth));
    console.log ("max width: " + this.maxWidth);
    
    // WE WILL CREATE SPAN ELEMENTS THAT SIGNIFY A SINGLE LINE
    let singleLine = $ ('<span></span>');
    
    // LOOP THROUGH THE TEXT AND CREATE LINES. ADD WORDS TO A LINE UNTIL THE WIDTH OF THE SPAN REACHES MAXWIDTH.
    for (var i = 0; i < contentArray.length; i++)
    {
      singleLine.empty ();
      m = '';
      do
      {
        m = m + ' ' + contentArray[i];
        singleLine.text (m);
        document.getElementById ('test').innerHTML = singleLine[0].outerHTML;
        this.mWidth = document.getElementById ("test").offsetWidth * this.actualZoom;

        // IF THE SET OF WORDS FORM ONE LINE FITTING THE CONTAINER WIDTH, ADD A BREAK SO ITS A LINE
        if (this.mWidth >= this.maxWidth)
        {
          let line = singleLine[0].outerHTML + "<br>";
          newContentArray.push (line);
          break;
        }
        i++;
      }
      while (this.mWidth < this.maxWidth && i < contentArray.length);
    }
    
    // IF EXTRA WORDS ARE REMAINING, ADD TO THE LINE
    if (singleLine.text () != '')
    {
      let line = singleLine[0].outerHTML + "<br>";
      newContentArray.push (line);
    }
    
    // RETURN LINES OF CONTENT ARRAY
    document.getElementById ('test').innerHTML = '';
    return newContentArray;
  }
  
  // RETURN CURRENT GLOBAL FONT SIZE
  getGlobalFont ()
  {
    return this.globalFont;
  }
  
  // CALCULATE THE NUMBER OF PAGES TO DISPLAY BASED ON ZOOM AND GIVEN CONTAINER HEIGHT AND WIDTH
  calculateResponsiveness (orginalContainerWidth, originalContainerHeight, content)
  {
    
    // THE CONTENT THAT IS PASSED TO THIS FUNCTION SHOULD BE ESCAPED OR ENCODED SO DOUBLE QUOTES OR QUOTES DON'T CAUSE ANY ISSUE.
    console.log ("buffer = " + this.buffer);
    console.log ("font = " + this.globalFont);
    
    // THIS GIVES THE ZOOM LEVEL
    this.devicePixelRatio = window.devicePixelRatio;
    
    // THE detectZoom API GIVES THE ACTUAL ZOOM
    this.actualZoom = detectZoom.zoom ();
    
    // THIS IS THE ZOOM ON THE BROWSER.
    this.browserZoomLevel = Math.round (this.devicePixelRatio * 100);
    
    // CALCULATED CONTAINER DIMENSIONS
    this.containerWidth = (orginalContainerWidth - this.buffer * orginalContainerWidth) * this.actualZoom;
    this.containerHeight = (originalContainerHeight - this.buffer * originalContainerHeight);
    
    // THE PAGES ARE STORED IN THIS ARRAY
    this.mainContentArray = [];
    
    // DEBUG LOGS
    console.log ("original Container width: " + orginalContainerWidth);
    console.log ("original Container height: " + originalContainerHeight);
    console.log ("calculated Container width: " + this.containerWidth);
    console.log ("calculated Container height: " + this.containerHeight);
    
    if (this.containerHeight <= 0) return [];
    
    // TEST CONTENT
    let test1 = "<h2><span class=\"mw-headline\" id=\"Etymology\">Etymology</span></h2><p>The origin of the English word <i><a" +
      " href=\"https://en.wiktionary.org/wiki/cat#English\" class=\"extiw\" title=\"wikt:cat\">cat</a></i> (<a href=\"/wiki/Old_English\" title=\"Old English\">Old English</a> <i lang=\"ang\" title=\"Old English language text\">catt</i>) and its counterparts in other <a href=\"/wiki/Germanic_languages\" title=\"Germanic languages\">Germanic languages</a> (such as <a href=\"/wiki/German_language\" title=\"German language\">German</a> <i lang=\"de\" title=\"German language text\">Katze</i>), descended from <a href=\"/wiki/Proto-Germanic_language\" title=\"Proto-Germanic language\">Proto-Germanic</a> <i>*kattōn-</i>, is controversial. It was thought traditionally to be a borrowing from <a href=\"/wiki/Late_Latin\" title=\"Late Latin\">Late Latin</a> <i lang=\"la\" title=\"Latin language text\">cattus</i>, 'domestic cat', from <i lang=\"la\" title=\"Latin language text\">catta</i> (used around 75 AD by <a href=\"/wiki/Martial\" title=\"Martial\">Martial</a>),<sup id=\"cite_ref-22\" class=\"reference\"><a href=\"#cite_note-22\">[22]</a></sup><sup id=\"cite_ref-23\" class=\"reference\"><a href=\"#cite_note-23\">[23]</a></sup> compare also <a href=\"/wiki/Byzantine_Greek\" class=\"mw-redirect\" title=\"Byzantine Greek\">Byzantine Greek</a> <span lang=\"grc\" title=\"Ancient Greek language text\">κάττα</span>, <a href=\"/wiki/Portuguese_language\" title=\"Portuguese language\">Portuguese</a> and <a href=\"/wiki/Spanish_language\" title=\"Spanish language\">Spanish</a> <i lang=\"es\" title=\"Spanish language text\">gato</i>, <a href=\"/wiki/French_language\" title=\"French language\">French</a> <i lang=\"fr\" title=\"French language text\">chat</i>, <a href=\"/wiki/Maltese_language\" title=\"Maltese language\">Maltese</a> <i lang=\"mt\" title=\"Maltese language text\">qattus</i>, <a href=\"/wiki/Lithuanian_language\" title=\"Lithuanian language\">Lithuanian</a> <i lang=\"lt\" title=\"Lithuanian language text\">katė</i>, and <a href=\"/wiki/Old_Church_Slavonic\" title=\"Old Church Slavonic\">Old Church Slavonic</a> <span lang=\"cu\" title=\"Church Slavonic language text\">kotъ</span> (<i lang=\"cu-Latn\" title=\"Church Slavonic language text\">kot'</i>), among others.<sup id=\"cite_ref-24\" class=\"reference\"><a href=\"#cite_note-24\">[24]</a></sup></p>";
    
    let test2 = "<h2><span class=\"mw-headline\" id=\"Etymology\">Etymology</span></h2><p>The origin of the English word <i><a" +
      " href=\"https://en.wiktionary.org/wiki/cat#English\" class=\"extiw\" title=\"wikt:cat\">cat</a></i> (<a href=\"/wiki/Old_English\" title=\"Old English\">Old English</a> <i lang=\"ang\" title=\"Old English language text\">catt</i>) and its counterparts in other <a href=\"/wiki/Germanic_languages\" title=\"Germanic languages\">Germanic languages</a> (such as <a href=\"/wiki/German_language\" title=\"German language\">German</a> <i lang=\"de\" title=\"German language text\">Katze</i>), descended from <a href=\"/wiki/Proto-Germanic_language\" title=\"Proto-Germanic language\">Proto-Germanic</a> <i>*kattōn-</i>, is controversial. It was thought traditionally to be a borrowing from <a href=\"/wiki/Late_Latin\" title=\"Late Latin\">Late Latin</a> <i lang=\"la\" title=\"Latin language text\">cattus</i>, 'domestic cat', from <i lang=\"la\" title=\"Latin language text\">catta</i> (used around 75 AD by <a href=\"/wiki/Martial\" title=\"Martial\">Martial</a>),<sup id=\"cite_ref-22\" class=\"reference\"><a href=\"#cite_note-22\">[22]</a></sup><sup id=\"cite_ref-23\" class=\"reference\"><a href=\"#cite_note-23\">[23]</a></sup> compare also <a href=\"/wiki/Byzantine_Greek\" class=\"mw-redirect\" title=\"Byzantine Greek\">Byzantine Greek</a> <span lang=\"grc\" title=\"Ancient Greek language text\">κάττα</span>, <a href=\"/wiki/Portuguese_language\" title=\"Portuguese language\">Portuguese</a> and <a href=\"/wiki/Spanish_language\" title=\"Spanish language\">Spanish</a> <i lang=\"es\" title=\"Spanish language text\">gato</i>, <a href=\"/wiki/French_language\" title=\"French language\">French</a> <i lang=\"fr\" title=\"French language text\">chat</i>, <a href=\"/wiki/Maltese_language\" title=\"Maltese language\">Maltese</a> <i lang=\"mt\" title=\"Maltese language text\">qattus</i>, <a href=\"/wiki/Lithuanian_language\" title=\"Lithuanian language\">Lithuanian</a> <i lang=\"lt\" title=\"Lithuanian language text\">katė</i>, and <a href=\"/wiki/Old_Church_Slavonic\" title=\"Old Church Slavonic\">Old Church Slavonic</a> <span lang=\"cu\" title=\"Church Slavonic language text\">kotъ</span> (<i lang=\"cu-Latn\" title=\"Church Slavonic language text\">kot'</i>), among others.<sup id=\"cite_ref-24\" class=\"reference\"><a href=\"#cite_note-24\">[24]</a></sup></p><p>The Late Latin word is generally thought to originate from an <a href=\"/wiki/Afro-Asiatic_languages\" class=\"mw-redirect\" title=\"Afro-Asiatic languages\">Afro-Asiatic</a> language, but every proposed source word has presented problems. Many references refer to \"Berber\" (<a href=\"/wiki/Kabyle_language\" title=\"Kabyle language\">Kabyle</a>) <i lang=\"kab\" title=\"Kabyle language text\">kaddîska</i>, 'wildcat', and <a href=\"/wiki/Nubian_languages\" title=\"Nubian languages\">Nubian</a> <i lang=\"nub\" title=\"Nubian languages collective text\">kadīs</i> as possible sources or cognates, but M. <a href=\"/wiki/Lionel_Bender\" title=\"Lionel Bender\">Lionel Bender</a> suggests the Nubian term is a loan from <a href=\"/wiki/Arabic_language\" class=\"mw-redirect\" title=\"Arabic language\">Arabic</a> <span lang=\"ar\" dir=\"rtl\" title=\"Arabic language text\">قِطَّة</span> <i lang=\"ar-Latn\" title=\"Arabic language text\">qiṭṭa</i>.<sup id=\"cite_ref-Qitta_25-0\" class=\"reference\"><a href=\"#cite_note-Qitta-25\">[25]</a></sup> <a href=\"/wiki/Jean-Paul_Savignac\" title=\"Jean-Paul Savignac\">Jean-Paul Savignac</a> suggests the Latin word is from an <a href=\"/wiki/Egyptian_language\" title=\"Egyptian language\">Ancient Egyptian</a> precursor of <a href=\"/wiki/Coptic_language\" title=\"Coptic language\">Coptic</a> <span lang=\"cop\" title=\"Coptic language text\"><a href=\"https://en.wiktionary.org/wiki/%CF%A3%E2%B2%81%E2%B2%A9\" class=\"extiw\" title=\"wikt:ϣⲁⲩ\">ϣⲁⲩ</a></span> <i lang=\"cop-Latn\" title=\"Coptic language text\">šau</i>, 'tomcat', or its feminine form suffixed with <i lang=\"egy-Latn\" title=\"Ancient Egyptian language text\"><a href=\"https://en.wiktionary.org/wiki/-t#Egyptian\" class=\"extiw\" title=\"wikt:-t\">-t</a></i>,<sup id=\"cite_ref-26\" class=\"reference\"><a href=\"#cite_note-26\">[26]</a></sup> but <a href=\"/w/index.php?title=John_Huehnergard&amp;action=edit&amp;redlink=1\" class=\"new\" title=\"John Huehnergard (page does not exist)\">John Huehnergard</a> says \"the source was clearly not Egyptian itself, where no analogous form is attested.\"<sup id=\"cite_ref-Qitta_25-1\" class=\"reference\"><a href=\"#cite_note-Qitta-25\">[25]</a></sup> Huehnergard opines it is \"equally likely that the forms might derive from an ancient Germanic word, imported into Latin and thence to Greek and to Syriac and Arabic\". Guus Kroonen also considers the word to be native to Germanic (due to morphological alternations) and Northern Europe, and suggests that it might ultimately be borrowed from <a href=\"/wiki/Uralic_languages\" title=\"Uralic languages\">Uralic</a>, cf. <a href=\"/wiki/Northern_Sami_language\" class=\"mw-redirect\" title=\"Northern Sami language\">Northern Sami</a> <i lang=\"se\" title=\"Northern Sami language text\">gáđfi</i>, 'female <a href=\"/wiki/Stoat\" title=\"Stoat\">stoat</a>', and <a href=\"/wiki/Hungarian_language\" title=\"Hungarian language\">Hungarian</a> <i lang=\"hu\" title=\"Hungarian language text\">hölgy</i>, 'stoat'; from <a href=\"/wiki/Proto-Uralic_language\" title=\"Proto-Uralic language\">Proto-Uralic</a> <a href=\"https://en.wiktionary.org/wiki/Reconstruction:Proto-Uralic/k%C3%A4%C4%8Fw%C3%A4\" class=\"extiw\" title=\"wikt:Reconstruction:Proto-Uralic/käďwä\"><i>*käďwä</i></a>, 'female (of a furred animal)'.<sup id=\"cite_ref-27\" class=\"reference\"><a href=\"#cite_note-27\">[27]</a></sup> In any case, <i>cat</i> is a classic example of  a word that has spread as a loanword among numerous languages and cultures: a <i lang=\"de\" title=\"German language text\"><a href=\"/wiki/Wanderwort\" title=\"Wanderwort\">Wanderwort</a></i>.</p><h2><span class=\"mw-headline\" id=\"Alternative_term\">Alternative term</span></h2><p>An alternative word is English <i><a href=\"https://en.wiktionary.org/wiki/puss#English\" class=\"extiw\" title=\"wikt:puss\">puss</a></i> (extended as <i>pussy</i> and <i>pussycat</i>). Attested only from the 16th century, it may have been introduced from <a href=\"/wiki/Dutch_language\" title=\"Dutch language\">Dutch</a> <i lang=\"nl\" title=\"Dutch language text\">poes</i> or from <a href=\"/wiki/Low_German\" title=\"Low German\">Low German</a> <i lang=\"nds\" title=\"Low German language text\">puuskatte</i>, related to <a href=\"/wiki/Swedish_language\" title=\"Swedish language\">Swedish</a> <i lang=\"sv\" title=\"Swedish language text\">kattepus</i>, or <a href=\"/wiki/Norwegian_language\" title=\"Norwegian language\">Norwegian</a> <i lang=\"no\" title=\"Norwegian language text\">pus</i>, <i lang=\"no\" title=\"Norwegian language text\">pusekatt</i>. Similar forms exist in Lithuanian <i lang=\"lt\" title=\"Lithuanian language text\">puižė</i> and <a href=\"/wiki/Irish_language\" title=\"Irish language\">Irish</a> <i lang=\"ga\" title=\"Irish language text\">puisín</i> or <i lang=\"ga\" title=\"Irish language text\">puiscín</i>. The etymology of this word is unknown, but it may have simply <a href=\"/wiki/Onomatopoeia\" title=\"Onomatopoeia\">arisen from a sound</a> used to attract a cat.<sup id=\"cite_ref-28\" class=\"reference\"><a href=\"#cite_note-28\">[28]</a></sup><sup id=\"cite_ref-Gramercy_Unabridged_29-0\" class=\"reference\"><a href=\"#cite_note-Gramercy_Unabridged-29\">[29]</a></sup></p><h2><span class=\"mw-headline\" id=\"Associated_terms\">Associated terms</span></h2><ul><li>A group of cats can be referred to as a <i>clowder</i> or a <i>glaring</i>.<sup id=\"cite_ref-30\" class=\"reference\"><a href=\"#cite_note-30\">[30]</a></sup></li><li>A male cat is called a <i>tom</i> or <i>tomcat</i><sup id=\"cite_ref-31\" class=\"reference\"><a href=\"#cite_note-31\">[31]</a></sup> (or a <i>gib</i>,<sup id=\"cite_ref-32\" class=\"reference\"><a href=\"#cite_note-32\">[32]</a></sup> if neutered)</li><li>An <a href=\"/wiki/Spaying\" class=\"mw-redirect\" title=\"Spaying\">unspayed</a> female is called a <i>queen</i>,<sup id=\"cite_ref-33\" class=\"reference\"><a href=\"#cite_note-33\">[33]</a></sup> especially in a cat-breeding context.</li><li>A juvenile cat is referred to as a <i><a href=\"/wiki/Kitten\" title=\"Kitten\">kitten</a></i>. In <a href=\"/wiki/Early_Modern_English\" title=\"Early Modern English\">Early Modern English</a>, the word <i>kitten</i> was interchangeable with the now-obsolete word <i>catling</i>.<sup id=\"cite_ref-34\" class=\"reference\"><a href=\"#cite_note-34\">[34]</a></sup></li><li>The male progenitor of a cat, especially a pedigreed cat, is its <i>sire</i><sup id=\"cite_ref-35\" class=\"reference\"><a href=\"#cite_note-35\">[35]</a></sup> and its mother is its <i>dam</i>.<sup id=\"cite_ref-36\" class=\"reference\"><a href=\"#cite_note-36\">[36]</a></sup></li><li>A <a href=\"/wiki/Pedigree_(cat)\" class=\"mw-redirect\" title=\"Pedigree (cat)\">pedigreed cat</a> is one whose ancestry is recorded by a <a href=\"/wiki/Cat_fancy\" class=\"mw-redirect\" title=\"Cat fancy\">cat fancier</a> organization.</li><li>A <a href=\"/wiki/Purebred_cat\" class=\"mw-redirect\" title=\"Purebred cat\">purebred cat</a> is one whose ancestry contains only individuals of the same breed.</li><li>Many pedigreed and especially purebred cats are exhibited as <a href=\"/wiki/Show_cat\" title=\"Show cat\">show cats</a>.</li><li>Cats of unrecorded, mixed ancestry are referred to as <a href=\"/wiki/Domestic_short-haired_cat\" title=\"Domestic short-haired cat\">domestic short-haired</a> or <a href=\"/wiki/Domestic_long-haired_cat\" title=\"Domestic long-haired cat\">domestic long-haired cats</a> (by <a href=\"/wiki/Coat_(animal)\" title=\"Coat (animal)\">coat</a> type), or commonly as random-bred, moggies (chiefly <a href=\"/wiki/British_English\" title=\"British English\">British</a>), or (using terms borrowed from <a href=\"/wiki/Dog_breeding\" title=\"Dog breeding\">dog breeding</a>) mongrels or mutt-cats.</li><li>The semi-<a href=\"/wiki/Feral_animal\" class=\"mw-redirect\" title=\"Feral animal\">feral</a> cat, a mostly outdoor cat, is not owned by any one individual, but is generally friendly to people and may be fed by several households.</li><li>Truly <a href=\"/wiki/Feral_cat\" title=\"Feral cat\">feral cats</a> are associated with human habitation areas, foraging for food and sometimes intermittently fed by people, but are typically wary of human interaction.<sup id=\"cite_ref-Bradshaw1999_37-0\" class=\"reference\"><a href=\"#cite_note-Bradshaw1999-37\">[37]</a></sup></li><li>Domestic vs. wild - while the <a href=\"/wiki/African_wildcat\" title=\"African wildcat\">African wildcat</a> is the ancestral <a href=\"/wiki/Species\" title=\"Species\">species</a> from which domestic cats are descended, and wildcats and domestic cats can completely interbreed, several intermediate stages occur between domestic pet and pedigree cats on one hand and entirely wild animals on the other.</li></ul><h2><span class=\"mw-headline\" id=\"Taxonomy\">Taxonomy</span></h2><p>The <a href=\"/wiki/Scientific_name\" class=\"mw-redirect\" title=\"Scientific name\">scientific name</a> <i>Felis catus</i> for the domestic cat was proposed by <a href=\"/wiki/Carl_Linnaeus\" title=\"Carl Linnaeus\">Carl Linnaeus</a> in the <a href=\"/wiki/10th_edition_of_Systema_Naturae\" title=\"10th edition of Systema Naturae\">10th edition of Systema Naturae</a> published in 1758.<sup id=\"cite_ref-Linaeus1758_1-2\" class=\"reference\"><a href=\"#cite_note-Linaeus1758-1\">[1]</a></sup><sup id=\"cite_ref-MSW3fc_2-2\" class=\"reference\"><a href=\"#cite_note-MSW3fc-2\">[2]</a></sup><i>Felis catus domesticus</i> was a scientific name proposed by <a href=\"/wiki/Johann_Christian_Polycarp_Erxleben\" title=\"Johann Christian Polycarp Erxleben\">Johann Christian Polycarp Erxleben</a> in 1777.<sup id=\"cite_ref-Erxleben_3-1\" class=\"reference\"><a href=\"#cite_note-Erxleben-3\">[3]</a></sup><i>Felis daemon</i> proposed by <a href=\"/wiki/Konstantin_Alekseevich_Satunin\" class=\"mw-redirect\" title=\"Konstantin Alekseevich Satunin\">Konstantin Alekseevich Satunin</a> in 1904 was a black cat specimen from the <a href=\"/wiki/Transcaucasus\" class=\"mw-redirect\" title=\"Transcaucasus\">Transcaucasus</a>, later identified as a domestic cat.<sup id=\"cite_ref-38\" class=\"reference\"><a href=\"#cite_note-38\">[38]</a></sup><sup id=\"cite_ref-39\" class=\"reference\"><a href=\"#cite_note-39\">[39]</a></sup></p><p>In 2003, the <a href=\"/wiki/International_Commission_on_Zoological_Nomenclature\" title=\"International Commission on Zoological Nomenclature\">International Commission on Zoological Nomenclature</a> (ICZN) fixed the scientific name for the wildcat as <i>F. silvestris</i>. The same commission ruled that the domestic cat is a distinct <a href=\"/wiki/Taxon\" title=\"Taxon\">taxon</a> <i>Felis catus</i>.<sup id=\"cite_ref-ICZN_40-0\" class=\"reference\"><a href=\"#cite_note-ICZN-40\">[40]</a></sup><sup id=\"cite_ref-41\" class=\"reference\"><a href=\"#cite_note-41\">[41]</a></sup>Following results of <a href=\"/wiki/Phylogenetic\" class=\"mw-redirect\" title=\"Phylogenetic\">phylogenetic</a> research, the domestic cat was considered a <a href=\"/wiki/Wildcat\" title=\"Wildcat\">wildcat</a> <a href=\"/wiki/Subspecies\" title=\"Subspecies\">subspecies</a> <i>F. silvestris catus</i> in 2007.<sup id=\"cite_ref-Driscoll_42-0\" class=\"reference\"><a href=\"#cite_note-Driscoll-42\">[42]</a></sup><sup id=\"cite_ref-MSW3fs_43-0\" class=\"reference\"><a href=\"#cite_note-MSW3fs-43\">[43]</a></sup></p><p>In 2017, the IUCN Cat Classification Taskforce followed the recommendation of the ICZN in regarding the domestic cat as a distinct species.<sup id=\"cite_ref-44\" class=\"reference\"><a href=\"#cite_note-44\">[44]</a></sup></p>";
    
    let test3 = "<h3><span class=\"mw-headline\" id=\"Hunting_and_feeding\">Hunting and feeding</span></h3><p>Cats hunt small prey, primarily birds and rodents,<sup id=\"cite_ref-Woods_156-0\" class=\"reference\"><a href=\"#cite_note-Woods-156\">[155]</a></sup> and are often used as a form of pest control.<sup id=\"cite_ref-157\" class=\"reference\"><a href=\"#cite_note-157\">[156]</a></sup><sup id=\"cite_ref-158\" class=\"reference\"><a href=\"#cite_note-158\">[157]</a></sup> Domestic cats are a major predator of wildlife in the United States, killing an estimated 1.4 to 3.7&nbsp;billion birds and 6.9 to 20.7&nbsp;billion mammals annually.<sup id=\"cite_ref-NC012913_159-0\" class=\"reference\"><a href=\"#cite_note-NC012913-159\">[158]</a></sup><sup id=\"cite_ref-NYT012913_160-0\" class=\"reference\"><a href=\"#cite_note-NYT012913-160\">[159]</a></sup> The bulk of predation in the United States is done by 80 million feral and stray cats. Effective measures to reduce this population are elusive, meeting opposition from cat enthusiasts.<sup id=\"cite_ref-NC012913_159-1\" class=\"reference\"><a href=\"#cite_note-NC012913-159\">[158]</a></sup><sup id=\"cite_ref-NYT012913_160-1\" class=\"reference\"><a href=\"#cite_note-NYT012913-160\">[159]</a></sup> In the case of free-ranging pets, equipping cats with bells and not letting them out at night will reduce wildlife predation.<sup id=\"cite_ref-Woods_156-1\" class=\"reference\"><a href=\"#cite_note-Woods-156\">[155]</a></sup></p><p>Free-fed feral cats and house cats tend to consume many small meals in a single day, although the frequency and size of meals varies between individuals.<sup id=\"cite_ref-Bradshaw_134-1\" class=\"reference\"><a href=\"#cite_note-Bradshaw-134\">[133]</a></sup> Cats use two hunting strategies, either stalking prey actively, or <a href=\"/wiki/Ambush_predator\" title=\"Ambush predator\">waiting in ambush</a> until an animal comes close enough to be captured.<sup id=\"cite_ref-How_Cats_Evolved_to_Win_the_Internet_161-0\" class=\"reference\"><a href=\"#cite_note-How_Cats_Evolved_to_Win_the_Internet-161\">[160]</a></sup> Although it is not certain, the strategy used may depend on the prey species in the area, with cats waiting in ambush outside burrows, but tending to actively stalk birds.<sup id=\"cite_ref-Turner_2000_162-0\" class=\"reference\"><a href=\"#cite_note-Turner_2000-162\">[161]</a></sup><sup class=\"reference\" style=\"white-space:nowrap;\">:<span>153</span></sup></p><p>Perhaps the best known element of cats' hunting behavior, which is commonly misunderstood and often appalls cat owners because it looks like torture, is that cats often appear to \"play\" with prey by releasing it after capture. This behavior is due to an instinctive imperative to ensure that the prey is weak enough to be killed without endangering the cat.<sup id=\"cite_ref-163\" class=\"reference\"><a href=\"#cite_note-163\">[162]</a></sup> This behavior is referred to in the <a href=\"/wiki/Idiom\" title=\"Idiom\">idiom</a> \"cat-and-mouse game\" or simply \"<a href=\"/wiki/Cat_and_mouse\" title=\"Cat and mouse\">cat and mouse</a>\".</p><p>Another poorly understood element of cat hunting behavior is the presentation of prey to human guardians. <a href=\"/wiki/Ethology\" title=\"Ethology\">Ethologist</a> Paul Leyhausen proposed that cats adopt humans into their social group and share excess kill with others in the group according to the <a href=\"/wiki/Dominance_hierarchy\" title=\"Dominance hierarchy\">dominance hierarchy</a>, in which humans are reacted to as if they are at, or near, the top.<sup id=\"cite_ref-Leyhausen_1978_164-0\" class=\"reference\"><a href=\"#cite_note-Leyhausen_1978-164\">[163]</a></sup> Anthropologist and zoologist <a href=\"/wiki/Desmond_Morris\" title=\"Desmond Morris\">Desmond Morris</a>, in his 1986 book <i>Catwatching</i>, suggests, when cats bring home mice or birds, they are attempting to teach their human to hunt, or trying to help their human as if feeding \"an elderly cat, or an inept kitten\".<sup id=\"cite_ref-Morris_Catwatching_1_165-0\" class=\"reference\"><a href=\"#cite_note-Morris_Catwatching_1-165\">[164]</a></sup><sup id=\"cite_ref-166\" class=\"reference\"><a href=\"#cite_note-166\">[165]</a></sup> Morris's hypothesis is inconsistent with the fact that male cats also bring home prey, despite males having negligible involvement with raising kittens.<sup id=\"cite_ref-Turner_2000_162-1\" class=\"reference\"><a href=\"#cite_note-Turner_2000-162\">[161]</a></sup><sup class=\"reference\" style=\"white-space:nowrap;\">:<span>153</span></sup>. Since cats lack sufficient lips to create suction,<sup id=\"cite_ref-elsevier_171-0\" class=\"reference\"><a href=\"#cite_note-elsevier-171\">[170]</a></sup> they use a lapping method with the tongue to draw liquid upwards into their mouths. Lapping at a rate of four times a second, the cat touches the smooth tip of its tongue to the surface of the water, and quickly retracts it like a corkscrew, drawing water upwards.<sup id=\"cite_ref-Wade_2010_172-0\" class=\"reference\"><a href=\"#cite_note-Wade_2010-172\">[171]</a></sup></p>";
    
    // ADDING A BUFFER TO THE CONTAINER HEIGHT
    // THE BUFFER SHOULD COME FROM SITEVARIABLE TABLE.
    this.maxHeight = this.containerHeight;
    console.log ("max height: " + this.maxHeight);

    // CONTENT TO FIT THE CONTAINER
    content = test2 + test3;
    
    // CONVERTING THE TEST CONTENT INTO ARRAY OF HTML ELEMENTS USING JQUERY
    let dynamicDiv = $ ('<div></div>');
    dynamicDiv.html (content);
    
    // THIS WILL GIVE ONLY THE DIRECT CHILDREN OF THE PARENT
    let allHTMLElements = dynamicDiv.contents ();
    
    // THIS DIV WILL HOLD EVERY ELEMENT. THIS IS APPENDED TO THE BODY SO THAT THE OFFSET HEIGHT AND WIDTH COULD BE CALCULATED
    // REMEMBER TO REMOVE THIS DIV WHEN NOT NEEDED
    this.single_page_container = $ ("<div></div>").appendTo ("#guide-tab").hide ();
    
    // ITERATE THROUGH THE HTML ELEMENTS TO BREAK THE CONTENT INTO PAGES
    for (var elemNo = 0; elemNo < allHTMLElements.length; elemNo++)
    {
      this.singlePageHTML = '';
      this.pageHeight = 0;
      this.nextPage = false;
      
      // THIS LOOP ADDS ELEMENTS UNTIL A SINGLE PAGE FILLS
      while (!this.nextPage && elemNo < allHTMLElements.length)
      {
        let elementHeight = 0;
        $ (this.single_page_container).html ('');
        
        // GET THE JQUERY OBJECT OF THE CURRENT ELEMENT
        let currentElement = $ (allHTMLElements[elemNo]);
        
        // FIRST DETERMINE IF THIS ELEMENT IS AN ISSUE OR NOT.
        // ADD TO THE DYNAMIC CONTAINER, CALCULATE ITS HEIGHT AND SEE IF IT FITS AS IS.
        // IF IT DOES, WE CAN ADD TO THE PAGE AS IS AND MOVE ON TO THE NEXT ELEMENT
        // IF IT DOES NOT, WE HAVE TO BREAK IT UP
        $ (this.single_page_container).html (currentElement);
        elementHeight = $ (this.single_page_container).outerHeight ();
        elementHeight = elementHeight * this.actualZoom;
        
        // CHECK IF THE HEIGHT OF THE ELEMENT ADDED TO THE HEIGHT OF THE CURRENT PAGE WILL STILL FIT WITHIN THE MAX HEIGHT.
        if ((this.pageHeight + elementHeight) <= this.maxHeight)
        {
          // IT FITS, SO WE CAN ADD TO THE CURRENT PAGE AND MOVE ON TO THE NEXT ELEMENT
          this.pageHeight = this.pageHeight + elementHeight;
          this.singlePageHTML = this.singlePageHTML + $ (this.single_page_container).html ();
          
          // WE KNOW THERE IS STILL SOME SPACE IN THE TARGET CONTAINER. SO WE ARE ON THE SAME PAGE. GO FETCH THE NEXT TAG.
          this.nextPage = false;
          elemNo++;
        }
        else
        {
          // IT DID NOT FIT. WE HAVE TO PROCESS THIS SOME MORE.
          // WE WILL BREAK UP THIS PARTICULAR HTML TAG. WE WILL KEEP ADDING ITS CHILDREN UNTIL IT FITS
          let thisElementChildren = currentElement.contents ();
          let thisDynamicElement = document.createElement (currentElement[0].tagName);
          
          // MAYBE ITS ALL TEXT. IN THAT CASE WE HAVE TO BREAK UP THE TEXT
          if (thisElementChildren.length == 1 && thisElementChildren[0].nodeType == 3)
          {
            //WE ARE GOING TO CREATE BREAKUP THE TEXT AFTER COUNTING THE NUMBER OF CHARACTERS THAT WILL FIT IN THE GIVEN
            let contentLinesArray = this.calculateNumberOfLines (thisElementChildren[0].nodeValue);
            
            // MAKE PAGES OUT OF THE CONTENT LINES ARRAY
            this.generatePages (contentLinesArray, thisDynamicElement);

            // IF NOT GOING TO THE NEXT PAGE, GET THE NEXT ELEMENT ELSE STAY ON THE SAME ELEMENT TO PUT ON NEW PAGE
            if (!this.nextPage)
            {
              elemNo++;
            }
          }
          else
          {
            // MAKE PAGES OUT OF THE CONTENT LINES ARRAY
            this.generatePages (thisElementChildren, thisDynamicElement);
            if (!this.nextPage)
            {
              elemNo++;
            }
          }
        }
      }
      
      // ANY REMAINING HTML WILL BE ADDED TO THE PAGE HTML
      if (this.singlePageHTML != '')
      {
        this.mainContentArray.push (this.singlePageHTML);
      }
    }
    
    // REMOVE THE DYNAMIC DIV FROM THE BODY OF THE PAGE
    $ ('body').remove (this.single_page_container);
    
    // RETURN CONTENT WITH NO OF LINES PER PAGE
    let obj = {};
    obj['content'] = this.mainContentArray;
    return obj;
    
  }
  
  // THIS FUNCTION WILL LOOP THROUGH AN ARRAY OF CONTENT AND GENERATE PAGES ARRAY. EACH PAGE IS AN HTML CONTENT
  generatePages (contentArray, parentElement)
  {
    $ (this.single_page_container).empty ();
    let lineFragment = '';
    $ (parentElement).empty ();
    let elementHeight = 0;
    
    // LOOP THROUGH THE LINES AND MAKE PAGES OF CONTENT BASED ON THE PAGEHEIGHT.
    for (var line = 0; line < contentArray.length; line++)
    {
      elementHeight = 0;
      
      // IF WE ARE PROCESSING THE NEXT PAGE, EMPTY THE DYNAMIC CONTAINER.
      // ITS CONTENT WERE ADDED TO PREVIOUS PAGE ALREADY
      if (this.nextPage)
      {
        $ (parentElement).empty ();
      }
      
      // THERE ARE LINES TO ADD. ADD TO THE CURRENT PARENT TAG.
      $ (parentElement).append (contentArray[line]);
      
      // CALCULATE THE HEIGHT OF THE PARENT TAG NOW.
      $ (this.single_page_container).html (parentElement.outerHTML);
      elementHeight = $ (this.single_page_container).outerHeight ();
      elementHeight = elementHeight * this.actualZoom;
      
      // IF THIS LINE ADDED TO THE MAIN PAGE STILL FITS THE MAXHEIGHT, TRY ADDING NEXT LINE.
      // THE ELEMENT HEIGHT WILL BE EQUAL TO PAGE HEIGHT WHEN AS MANY LINES ARE ADDED.
      if ((this.pageHeight + elementHeight) <= this.maxHeight)
      {
        lineFragment = $ (this.single_page_container).html ();
        this.nextPage = false;
      }
      else
      {
        this.singlePageHTML = this.singlePageHTML + lineFragment;
        this.mainContentArray.push (this.singlePageHTML);
        this.singlePageHTML = '';
        line--;
        lineFragment = '';
        this.pageHeight = 0;
        this.nextPage = true;
      }
    }
    
    // IF THERE LINE FRAGMENT IS STILL NOT PART OF THE CURRENT PAGE, ADD IT.
    // THIS HAPPENS WHEN THE PAGE IS NOT FILLED YET, BUT WE RAN OUT OF ELEMENTS TO PROCESS.
    if (lineFragment != '')
    {
      this.pageHeight = this.pageHeight + elementHeight;
      this.singlePageHTML = this.singlePageHTML + lineFragment;
    }
    return;
  }
}

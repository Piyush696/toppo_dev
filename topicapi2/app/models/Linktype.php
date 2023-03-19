<?php

class Linktype extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $linktype_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $category1;

    /**
     *
     * @var string
     */
    public $isBasic;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("linktype");
        $this->hasMany('linktype_id', 'Autotaglinktype', 'linktype_id', ['alias' => 'Autotaglinktype']);
        $this->hasMany('linktype_id', 'LinkLinktype', 'linktype_id', ['alias' => 'LinkLinktype']);
        $this->hasMany('linktype_id', 'SubLink', 'primary_linktype_id', ['alias' => 'SubLink']);
        $this->hasMany('linktype_id', 'SubLink', 'secondary_linktype_id', ['alias' => 'SubLink']);
        $this->hasMany('linktype_id', 'SubLink', 'tertiary_linktype_id', ['alias' => 'SubLink']);
        $this->hasMany('linktype_id', 'TabFinderWeb', 'linktype_id', ['alias' => 'TabFinderWeb']);
        $this->hasMany('linktype_id', 'TabLearnChild', 'linktype_id', ['alias' => 'TabLearnChild']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'linktype';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Linktype[]|Linktype|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Linktype|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

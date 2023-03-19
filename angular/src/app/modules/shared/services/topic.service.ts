import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable ()
export class TopicService
{
  private url: string = 'assets/data/topics.json';
  
  constructor (private http: HttpClient)
  {
  }
  
  getReservedTopics (State, userId?, userRole?)
  {
    State['userId'] = userId || '';
    State['userRole'] = userRole || '';
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.getReservedTopic}`;
    return this.http.post<any> (apiUrl, State).map (data =>
    {
      return data;
    });
  }
  
  getTopicTypes ()
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.getTopicTypes}`;
    return this.http.post<any> (apiUrl, {}).map (data =>
    {
      return data;
    });
  }
  
  getTopicCategories ()
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.getTopicCategories}`;
    return this.http.post<any> (apiUrl, {}).map (data =>
    {
      return data;
    });
  }
  
  getTopicSubCategories (category)
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.getTopicSubCategories}`;
    return this.http.post<any> (apiUrl, {category: category}).map (data =>
    {
      return data;
    });
  }
  
  getTopicStatus (statusObj)
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.getTopicStatus}`;
    return this.http.post<any> (apiUrl, statusObj).map (data =>
    {
      return data;
    });
  }
  
  updateTopic (topicData)
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.updateTopic}`;
    return this.http.post<any> (apiUrl, topicData).map (data =>
    {
      return data;
    });
  }
  
  removeTopic (topicData)
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.deleteTopic}`;
    return this.http.post<any> (apiUrl, topicData).map (data =>
    {
      return data;
    });
  }
  
  addNewTopic (topicData)
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.addTopic}`;
    return this.http.post<any> (apiUrl, topicData).map (data =>
    {
      return data;
    });
  }
  
  getAllTopic (currentUser?)
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.getAllTopic}`;
    return this.http.post (apiUrl, currentUser).map (data =>
    {
      return data;
    });
  }
  
  findTopic (searchterm)
  {
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.topic}`;
    return this.http.post<any> (apiUrl, searchterm).map (data =>
    {
      return data;
    });
  }
  
  // GET THE TAB BASED ON SEARCH TOPIC
  getTopicTabs (searchterm)
  {
    console.log (searchterm)
    const apiUrl = `${environment.apiBase}/${environment.topicEndpoint}/${environment.getTopicTabs}`;
    return this.http.post<any> (apiUrl, searchterm).map (data =>
    {
      return data;
    });
  }
  
  // SAVE TABS OF TOPIC
  saveTopicTabs (topic, tabs)
  {
    return new Promise<any> ((resolve, reject) =>
    {
      const apiUrl = `/${environment.apiBase}/${environment.topicEndpoint}/${environment.addTabTopic}`;
      this.http.post (apiUrl, {
            'selectedtopic': topic,
            'tabs': tabs
          })
          .toPromise ()
          .then ((response) =>
          {
            resolve (response)
          })
          .catch ((error) =>
          {
            reject (error)
          })
    })
  }
  
  // RETURN DROPPED TOPIC
  getDroppedTopicTab ()
  {
    return ([
      {
        tabname: 'home',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'claim this topic',
        tabparent_id: null,
        tabtype_id: null
      },
    ])
  }
  
  // RETURN FORBIDDEN TOPIC
  getForbiddenTopicTab ()
  {
    return ([])
  }
  
  // RETURN UNCLAIMED TOPIC
  getUnclaimedTopicTab ()
  {
    return ([
      {
        tabname: 'home',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'claim this topic',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'reserved topic',
        tabparent_id: null,
        tabtype_id: null
      },
    ])
  }
  
  // RETURN TOPICOPOLIS RESERVED TOPIC
  getTSVTopicTab ()
  {
    
    return ([
      {
        tabname: 'home',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'claim this topic',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'Guides',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'reserved topic',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'test',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'BLOG',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'LEARN',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'FINDER',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'FAQ',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'CALENDER',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'EVENTS',
        tabparent_id: null,
        tabtype_id: null
      }
    ])
  }
  
  // RETURN TOPICOPOLIS TOPIC
  getTOPTopicsTab ()
  {
    
    return ([
      {
        tabname: 'home',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'Guides',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'reserved topic',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'test',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'BLOG',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'LEARN',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'FINDER',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'FAQ',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'CALENDER',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'EVENTS',
        tabparent_id: null,
        tabtype_id: null
      }
    ])
  }
  
  /// RETURN LIVE TOPIC
  getLIVTopicsTab ()
  {
    
    return ([
      {
        tabname: 'home',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'Guides',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'test',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'BLOG',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'LEARN',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'FINDER',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'FAQ',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'CALENDER',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'EVENTS',
        tabparent_id: null,
        tabtype_id: null
      }
    ])
  }
  
  /// RETURN EXPIRED TOPIC
  getEXPTopicsTab ()
  {
    return ([
      {
        tabname: 'home',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'claim this topic',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'Guides',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'test',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'BLOG',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'LEARN',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'FINDER',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'FAQ',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'CALENDER',
        tabparent_id: null,
        tabtype_id: null
      },
      {
        tabname: 'EVENTS',
        tabparent_id: null,
        tabtype_id: null
      }
    ])
  }
  
  // GET TOPICS FROM JSON DATA
  getDemoTopics():Observable<any[]>
  {
    return this.http.get<any[]> (this.url);
  }
}

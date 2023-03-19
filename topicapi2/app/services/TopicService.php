<?php

namespace App\Services;

use App\Models\Topic;
use App\Models\Tab;
use App\Models\TopicTab;

use \Phalcon\Mvc\Model\Query\Builder;

class TopicService extends AbstractService
{
    /** UNABLE TO CREATE USER */
    const ERROR_UNABLE_CREATE_USER = 11001;

    /** USER NOT FOUND */
    const ERROR_USER_NOT_FOUND = 11002;

    /** NO SUCH USER */
    const ERROR_INCORRECT_USER = 11003;

    /** UNABLE TO UPDATE USER */
    const ERROR_UNABLE_UPDATE_USER = 11004;

    /** UNABLE TO DELETE USER */
    const ERROR_UNABLE_DELETE_USER = 1105;


    // CREATE USERPROJECT AS MANY-MANY
    public function getTopicsTab()
    {
        try {
            $user = (new Builder())
                ->addFrom("App\Models\Topic", "topic")
                ->join("App\Models\TopicTab", 'topic.topic_id = TopicTab.topic_id', 'TopicTab', "LEFT")
                ->join("App\Models\Tab", 'Tab.tab_id = TopicTab.tab_id', 'Tab', "LEFT")          
                ->columns(
                    [
                        'topic_id' => 'topic.topic_id',
                        'topic' => 'topic.topic',
                        'status_id' => 'topic.status_id',
                        'primary_topictype_id' => 'topic.primary_topictype_id',
                        'similarwebcategory_id' => 'topic.similarwebcategory_id',
                        'qualityscore' => 'topic.qualityscore',
                        'topiclevel' => 'topic.topiclevel',
                        'tab_id' => 'Tab.tab_id',
                        'parent_tab_id'    => 'Tab.parent_tab_id',
                        'isTop' => 'Tab.isTop',
                        'tabname' => 'Tab.tabname',
                        'tablename' => 'Tab.tablename',
                        'taborder' => 'Tab.taborder',
                        'description' => 'Tab.description',
                        'wasClicked' => 'Tab.wasClicked'
                    ]
                )
                ->getQuery()
                ->execute();
            return $user->toArray();
        } catch (\PDOException $e) {
            throw new ServiceException($e->getMessage(), $e->getCode(), $e);
        }
    }
}

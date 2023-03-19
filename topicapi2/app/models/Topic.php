<?php
namespace App\Models;
class Topic extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var string
     */
    public $topic;

    /**
     *
     * @var string
     */
    public $tag;

    /**
     *
     * @var string
     */
    public $status_id;

    /**
     *
     * @var integer
     */
    public $topicreservationperiod_id;

    /**
     *
     * @var string
     */
    public $primary_topictype_id;

    /**
     *
     * @var string
     */
    public $secondary_topictype_id;

    /**
     *
     * @var string
     */
    public $tertiary_topictype_id;

    /**
     *
     * @var integer
     */
    public $parent_topic_id;

    /**
     *
     * @var integer
     */
    public $similarwebcategory_id;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     *
     * @var string
     */
    public $datetimemodified;
    /**
     *
     * @var string
     */
    public $qualityscore;
    /**
     *
     * @var string
     */
    public $topiclevel;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topic");
        $this->hasMany('topic_id', 'Event', 'topic_id', ['alias' => 'Event']);
        $this->hasMany('topic_id', 'Eventsubmission', 'topic_id', ['alias' => 'Eventsubmission']);
        $this->hasMany('topic_id', 'HClick', 'topic_id', ['alias' => 'HClick']);
        $this->hasMany('topic_id', 'HPageview', 'topic_id', ['alias' => 'HPageview']);
        $this->hasMany('topic_id', 'McSubject', 'topic_id', ['alias' => 'McSubject']);
        $this->hasMany('topic_id', 'Productprofile', 'topic_id', ['alias' => 'Productprofile']);
        $this->hasMany('topic_id', 'Slot', 'topic_id', ['alias' => 'Slot']);
        $this->hasMany('topic_id', 'SubCalendar', 'topic_id', ['alias' => 'SubCalendar']);
        $this->hasMany('topic_id', 'SubFaq', 'topic_id', ['alias' => 'SubFaq']);
        $this->hasMany('topic_id', 'SubLink', 'topic_id', ['alias' => 'SubLink']);
        $this->hasMany('topic_id', 'SubSynonym', 'topic_id', ['alias' => 'SubSynonym']);
        $this->hasMany('topic_id', 'TabFaqMain', 'topic_id', ['alias' => 'TabFaqMain']);
        $this->hasMany('topic_id', 'TabFinderProduct', 'topic_id', ['alias' => 'TabFinderProduct']);
        $this->hasMany('topic_id', 'TabLearnMain', 'topic_id', ['alias' => 'TabLearnMain']);
        $this->hasMany('topic_id', 'Tabstrip', 'topic_id', ['alias' => 'Tabstrip']);
        $this->hasManyToMany('topic_id', 'App\Models\TopicTab', 'topic_id', 'tab_id', 'App\Models\Tab', ['alias' => 'TopicTab']);
        $this->hasMany('topic_id', 'TopicTag', 'topic_id', ['alias' => 'TopicTag']);
        $this->hasMany('topic_id', 'TopicTopiccategory', 'topic_id', ['alias' => 'TopicTopiccategory']);
        $this->hasMany('topic_id', 'TopicTopictype', 'topic_id', ['alias' => 'TopicTopictype']);
        $this->hasMany('topic_id', 'Topicapplication', 'topic_id', ['alias' => 'Topicapplication']);
        $this->hasMany('topic_id', 'Topiccomment', 'topic_id', ['alias' => 'Topiccomment']);
        $this->hasMany('topic_id', 'Topicdisambiguator', 'toipc_id', ['alias' => 'Topicdisambiguator']);
        $this->hasMany('topic_id', 'Topiclink', 'topic_id', ['alias' => 'Topiclink']);
        $this->hasMany('topic_id', 'Topicmetric', 'topic_id', ['alias' => 'Topicmetric']);
        $this->hasMany('topic_id', 'Topicrating', 'topic_id', ['alias' => 'Topicrating']);
        $this->hasMany('topic_id', 'Topicrelationship', 'topicmain_id', ['alias' => 'Topicrelationship']);
        $this->hasMany('topic_id', 'Topicrelationship', 'topicrelated_id', ['alias' => 'Topicrelationship']);
        $this->hasMany('topic_id', 'Topicreservationperiod', 'topic_id', ['alias' => 'Topicreservationperiod']);
        $this->hasMany('topic_id', 'Topicsynonym', 'topic_id', ['alias' => 'Topicsynonym']);
        $this->hasMany('topic_id', 'UserRoleTopic', 'topic_id', ['alias' => 'UserRoleTopic']);
        $this->hasMany('topic_id', 'UserTopic', 'topic_id', ['alias' => 'UserTopic']);
        $this->belongsTo('primary_topictype_id', 'Topictype', 'topictype_id', ['alias' => 'Topictype']);
        $this->belongsTo('secondary_topictype_id', 'Topictype', 'topictype_id', ['alias' => 'Topictype']);
        $this->belongsTo('similarwebcategory_id', 'Similarwebcategory', 'similarwebcategory_id', ['alias' => 'Similarwebcategory']);
        $this->belongsTo('status_id', 'Status', 'status_id', ['alias' => 'Status']);
        $this->belongsTo('tertiary_topictype_id', 'Topictype', 'topictype_id', ['alias' => 'Topictype']);
        $this->belongsTo('topicreservationperiod_id', 'Topicreservationperiod', 'topicreservationperiod_id', ['alias' => 'Topicreservationperiod']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topic';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topic[]|Topic|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topic|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

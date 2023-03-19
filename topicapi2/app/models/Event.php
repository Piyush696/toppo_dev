<?php

class Event extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $event_id;

    /**
     *
     * @var string
     */
    public $eventtype_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $eventsubmission_id;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var integer
     */
    public $audiencelimit;

    /**
     *
     * @var integer
     */
    public $maxparticipants;

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
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("event");
        $this->hasMany('event_id', 'EventUser', 'event_id', ['alias' => 'EventUser']);
        $this->hasMany('event_id', 'Slotbooking', 'event_id', ['alias' => 'Slotbooking']);
        $this->belongsTo('eventsubmission_id', 'Eventsubmission', 'eventsubmission_id', ['alias' => 'Eventsubmission']);
        $this->belongsTo('eventtype_id', 'Eventtype', 'eventtype_id', ['alias' => 'Eventtype']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
        $this->belongsTo('user_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'event';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Event[]|Event|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Event|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

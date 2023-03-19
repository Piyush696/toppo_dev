<?php

class Eventsubmission extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $eventsubmission_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $submitter_user_id;

    /**
     *
     * @var integer
     */
    public $approver_user_id;

    /**
     *
     * @var string
     */
    public $datetimesubmitted;

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
        $this->setSource("eventsubmission");
        $this->hasMany('eventsubmission_id', 'Event', 'eventsubmission_id', ['alias' => 'Event']);
        $this->hasMany('eventsubmission_id', 'Eventsubmissionrecurrencepattern', 'eventsubmission_id', ['alias' => 'Eventsubmissionrecurrencepattern']);
        $this->belongsTo('approver_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('submitter_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'eventsubmission';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventsubmission[]|Eventsubmission|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventsubmission|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

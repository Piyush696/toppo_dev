<?php

class Topicreservationperiod extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topicreservationperiod_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $topicapplication_id;

    /**
     *
     * @var string
     */
    public $datetimeStart;

    /**
     *
     * @var string
     */
    public $datetimeEnd;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicreservationperiod");
        $this->hasMany('topicreservationperiod_id', 'Topic', 'topicreservationperiod_id', ['alias' => 'Topic']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
        $this->belongsTo('topicapplication_id', 'Topicapplication', 'topicapplication_id', ['alias' => 'Topicapplication']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicreservationperiod';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicreservationperiod[]|Topicreservationperiod|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicreservationperiod|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

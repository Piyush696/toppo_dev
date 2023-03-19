<?php

class Topicrelationship extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topicrelationship_id;

    /**
     *
     * @var integer
     */
    public $topicmain_id;

    /**
     *
     * @var integer
     */
    public $topicrelated_id;

    /**
     *
     * @var integer
     */
    public $user_topic_id;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var string
     */
    public $status;

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
        $this->setSource("topicrelationship");
        $this->belongsTo('topicmain_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
        $this->belongsTo('topicrelated_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
        $this->belongsTo('user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('user_topic_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicrelationship';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicrelationship[]|Topicrelationship|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicrelationship|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

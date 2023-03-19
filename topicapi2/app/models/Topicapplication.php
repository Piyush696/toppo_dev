<?php

class Topicapplication extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topicapplication_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var string
     */
    public $highestrolesought;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicapplication");
        $this->hasMany('topicapplication_id', 'Ctt', 'topicapplication_id', ['alias' => 'Ctt']);
        $this->hasMany('topicapplication_id', 'HTopicapplication', 'topicapplication_id', ['alias' => 'HTopicapplication']);
        $this->hasMany('topicapplication_id', 'TopicapplicationTopicapplicationcheckbox', 'topicapplication_id', ['alias' => 'TopicapplicationTopicapplicationcheckbox']);
        $this->hasMany('topicapplication_id', 'TopicapplicationTopicapplicationquestion', 'topicapplication_id', ['alias' => 'TopicapplicationTopicapplicationquestion']);
        $this->hasMany('topicapplication_id', 'Topicreservationperiod', 'topicapplication_id', ['alias' => 'Topicreservationperiod']);
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
        return 'topicapplication';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicapplication[]|Topicapplication|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicapplication|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

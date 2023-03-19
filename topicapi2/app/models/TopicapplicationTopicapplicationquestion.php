<?php

class TopicapplicationTopicapplicationquestion extends \Phalcon\Mvc\Model
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
    public $topicapplicationquestion_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicapplication_topicapplicationquestion");
        $this->belongsTo('topicapplication_id', 'Topicapplication', 'topicapplication_id', ['alias' => 'Topicapplication']);
        $this->belongsTo('topicapplicationquestion_id', 'Topicapplicationquestion', 'topicapplicationquestion_id', ['alias' => 'Topicapplicationquestion']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicapplication_topicapplicationquestion';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TopicapplicationTopicapplicationquestion[]|TopicapplicationTopicapplicationquestion|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TopicapplicationTopicapplicationquestion|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

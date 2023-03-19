<?php

class Topicapplicationquestion extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topicapplicationquestion_id;

    /**
     *
     * @var string
     */
    public $questions;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicapplicationquestion");
        $this->hasMany('topicapplicationquestion_id', 'TopicapplicationTopicapplicationquestion', 'topicapplicationquestion_id', ['alias' => 'TopicapplicationTopicapplicationquestion']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicapplicationquestion';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicapplicationquestion[]|Topicapplicationquestion|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicapplicationquestion|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

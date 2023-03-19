<?php

class TopicapplicationTopicapplicationcheckbox extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topicapplication_id;

    /**
     *
     * @var string
     */
    public $topicapplicationcheckbox_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicapplication_topicapplicationcheckbox");
        $this->belongsTo('topicapplication_id', 'Topicapplication', 'topicapplication_id', ['alias' => 'Topicapplication']);
        $this->belongsTo('topicapplicationcheckbox_id', 'Topicapplicationcheckbox', 'topicapplicationcheckbox_id', ['alias' => 'Topicapplicationcheckbox']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicapplication_topicapplicationcheckbox';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TopicapplicationTopicapplicationcheckbox[]|TopicapplicationTopicapplicationcheckbox|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TopicapplicationTopicapplicationcheckbox|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

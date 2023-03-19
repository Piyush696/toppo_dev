<?php

class TopicTopictype extends \Phalcon\Mvc\Model
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
    public $topictype_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topic_topictype");
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
        $this->belongsTo('topictype_id', 'Topictype', 'topictype_id', ['alias' => 'Topictype']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topic_topictype';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TopicTopictype[]|TopicTopictype|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TopicTopictype|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

<?php

class TopicTopiccategory extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $topiccategory_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topic_topiccategory");
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
        $this->belongsTo('topiccategory_id', 'Topiccategory', 'topiccategory_id', ['alias' => 'Topiccategory']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topic_topiccategory';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TopicTopiccategory[]|TopicTopiccategory|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TopicTopiccategory|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

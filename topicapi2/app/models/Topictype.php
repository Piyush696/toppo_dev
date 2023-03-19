<?php

class Topictype extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $topictype_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $description;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topictype");
        $this->hasMany('topictype_id', 'Topic', 'primary_topictype_id', ['alias' => 'Topic']);
        $this->hasMany('topictype_id', 'Topic', 'secondary_topictype_id', ['alias' => 'Topic']);
        $this->hasMany('topictype_id', 'Topic', 'tertiary_topictype_id', ['alias' => 'Topic']);
        $this->hasMany('topictype_id', 'TopicTopictype', 'topictype_id', ['alias' => 'TopicTopictype']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topictype';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topictype[]|Topictype|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topictype|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

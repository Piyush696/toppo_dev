<?php

class Topicmetric extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topicmetric_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var string
     */
    public $source;

    /**
     *
     * @var integer
     */
    public $broadClicksPerDay;

    /**
     *
     * @var double
     */
    public $broadCostPerClick;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicmetric");
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicmetric';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicmetric[]|Topicmetric|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicmetric|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

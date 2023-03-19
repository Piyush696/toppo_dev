<?php

class Topicdisambiguator extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topicdisambiguator_id;

    /**
     *
     * @var integer
     */
    public $toipc_id;

    /**
     *
     * @var string
     */
    public $topic;

    /**
     *
     * @var string
     */
    public $disambiguator;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicdisambiguator");
        $this->belongsTo('toipc_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicdisambiguator';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicdisambiguator[]|Topicdisambiguator|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicdisambiguator|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

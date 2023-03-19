<?php

class Linkrelationship extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $target_link_id;

    /**
     *
     * @var integer
     */
    public $related_link_id;

    /**
     *
     * @var string
     */
    public $isActive;

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
        $this->setSource("linkrelationship");
        $this->belongsTo('related_link_id', 'Link', 'link_id', ['alias' => 'Link']);
        $this->belongsTo('target_link_id', 'Link', 'link_id', ['alias' => 'Link']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'linkrelationship';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Linkrelationship[]|Linkrelationship|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Linkrelationship|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

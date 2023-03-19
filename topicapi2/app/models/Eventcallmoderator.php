<?php

class Eventcallmoderator extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $eventcallmoderator_id;

    /**
     *
     * @var string
     */
    public $eventcallreason_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("eventcallmoderator");
        $this->belongsTo('eventcallreason_id', 'Eventcallreason', 'eventcallreason_id', ['alias' => 'Eventcallreason']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'eventcallmoderator';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventcallmoderator[]|Eventcallmoderator|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventcallmoderator|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

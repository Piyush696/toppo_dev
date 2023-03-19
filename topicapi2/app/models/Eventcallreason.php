<?php

class Eventcallreason extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $eventcallreason_id;

    /**
     *
     * @var string
     */
    public $reason;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("eventcallreason");
        $this->hasMany('eventcallreason_id', 'Eventcallmoderator', 'eventcallreason_id', ['alias' => 'Eventcallmoderator']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'eventcallreason';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventcallreason[]|Eventcallreason|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventcallreason|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

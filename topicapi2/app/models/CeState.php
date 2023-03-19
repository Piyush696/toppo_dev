<?php

class CeState extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $ceState_id;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $howeventtriggered;

    /**
     *
     * @var string
     */
    public $eventtype;

    /**
     *
     * @var string
     */
    public $afterthisdo;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("ce-state");
        $this->hasMany('ce-state_id', 'CeStateCeTab', 'ce-state_id', ['alias' => 'CeStateCeTab']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'ce-state';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return CeState[]|CeState|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return CeState|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

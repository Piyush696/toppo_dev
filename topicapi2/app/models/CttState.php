<?php

class CttState extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $cttState_id;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $programmerinstructions;

    /**
     *
     * @var string
     */
    public $eventtype;

    /**
     *
     * @var string
     */
    public $beforethisrequired;

    /**
     *
     * @var string
     */
    public $afterthisdo;

    /**
     *
     * @var integer
     */
    public $afterthisdoDelay;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("ctt-state");
        $this->hasMany('ctt-state_id', 'CttStateCttTab', 'ctt-state_id', ['alias' => 'CttStateCttTab']);
        $this->hasMany('ctt-state_id', 'HClaimthistopic', 'ctt-state_id', ['alias' => 'HClaimthistopic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'ctt-state';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return CttState[]|CttState|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return CttState|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

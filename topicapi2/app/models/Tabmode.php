<?php

class Tabmode extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $tabmode_id;

    /**
     *
     * @var string
     */
    public $isVisible;

    /**
     *
     * @var string
     */
    public $isLive;

    /**
     *
     * @var string
     */
    public $isClickable;

    /**
     *
     * @var string
     */
    public $isActivated;

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
        $this->setSource("tabmode");
        $this->hasMany('tabmode_id', 'CeStateCeTab', 'tabmode_id', ['alias' => 'CeStateCeTab']);
        $this->hasMany('tabmode_id', 'CttStateCttTab', 'tabmode_id', ['alias' => 'CttStateCttTab']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tabmode';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Tabmode[]|Tabmode|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Tabmode|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

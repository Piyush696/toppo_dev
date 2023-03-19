<?php

class CeTab extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $ceTab_id;

    /**
     *
     * @var string
     */
    public $tabname;

    /**
     *
     * @var string
     */
    public $tabid;

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
        $this->setSource("ce-tab");
        $this->hasMany('ce-tab_id', 'CeStateCeTab', 'ce-tab_id', ['alias' => 'CeStateCeTab']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'ce-tab';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return CeTab[]|CeTab|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return CeTab|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

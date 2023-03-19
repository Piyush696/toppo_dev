<?php

class CeStateCeTab extends \Phalcon\Mvc\Model
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
    public $ceTab_id;

    /**
     *
     * @var string
     */
    public $tabmode_id;

    /**
     *
     * @var string
     */
    public $note;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("ce-state_ce-tab");
        $this->belongsTo('ce-state_id', 'Ce-state', 'ce-state_id', ['alias' => 'CeState']);
        $this->belongsTo('ce-tab_id', 'Ce-tab', 'ce-tab_id', ['alias' => 'CeTab']);
        $this->belongsTo('tabmode_id', 'Tabmode', 'tabmode_id', ['alias' => 'Tabmode']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'ce-state_ce-tab';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return CeStateCeTab[]|CeStateCeTab|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return CeStateCeTab|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

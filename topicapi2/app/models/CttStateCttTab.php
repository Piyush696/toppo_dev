<?php

class CttStateCttTab extends \Phalcon\Mvc\Model
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
    public $cttTab_id;

    /**
     *
     * @var string
     */
    public $tabmode_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("ctt-state_ctt-tab");
        $this->belongsTo('ctt-state_id', 'Ctt-state', 'ctt-state_id', ['alias' => 'CttState']);
        $this->belongsTo('ctt-tab_id', 'Ctt-tab', 'ctt-tab_id', ['alias' => 'CttTab']);
        $this->belongsTo('tabmode_id', 'Tabmode', 'tabmode_id', ['alias' => 'Tabmode']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'ctt-state_ctt-tab';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return CttStateCttTab[]|CttStateCttTab|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return CttStateCttTab|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

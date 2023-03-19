<?php

class CttTab extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $cttTab_id;

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
        $this->setSource("ctt-tab");
        $this->hasMany('ctt-tab_id', 'CttStateCttTab', 'ctt-tab_id', ['alias' => 'CttStateCttTab']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'ctt-tab';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return CttTab[]|CttTab|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return CttTab|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

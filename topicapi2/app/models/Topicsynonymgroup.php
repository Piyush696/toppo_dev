<?php

class Topicsynonymgroup extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $topicsynonymgroup_id;

    /**
     *
     * @var string
     */
    public $topicsynonymgrouptype;

    /**
     *
     * @var string
     */
    public $status;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("topicsynonymgroup");
        $this->hasMany('topicsynonymgroup_id', 'Topicsynonym', 'topicsynonymgroup_id', ['alias' => 'Topicsynonym']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'topicsynonymgroup';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicsynonymgroup[]|Topicsynonymgroup|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Topicsynonymgroup|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

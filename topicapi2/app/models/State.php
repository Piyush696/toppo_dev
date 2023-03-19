<?php

class State extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $state_id;

    /**
     *
     * @var string
     */
    public $statename;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("state");
        $this->hasMany('state_id', 'Zipcode', 'state_id', ['alias' => 'Zipcode']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'state';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return State[]|State|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return State|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

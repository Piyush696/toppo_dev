<?php

class Credit extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $credit_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var integer
     */
    public $benchmark;

    /**
     *
     * @var string
     */
    public $unit;

    /**
     *
     * @var integer
     */
    public $default;

    /**
     *
     * @var integer
     */
    public $max;

    /**
     *
     * @var integer
     */
    public $dailymax;

    /**
     *
     * @var string
     */
    public $direction;

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
        $this->setSource("credit");
        $this->hasMany('credit_id', 'TCredit', 't-credit_id', ['alias' => 'TCredit']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'credit';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Credit[]|Credit|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Credit|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

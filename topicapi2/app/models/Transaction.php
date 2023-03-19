<?php

class Transaction extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $transaction_id;

    /**
     *
     * @var integer
     */
    public $userfrom_id;

    /**
     *
     * @var integer
     */
    public $userto_id;

    /**
     *
     * @var integer
     */
    public $amount;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("transaction");
        $this->belongsTo('userfrom_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('userto_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'transaction';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Transaction[]|Transaction|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Transaction|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

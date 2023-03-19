<?php

class TCredit extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $tCredit_id;

    /**
     *
     * @var string
     */
    public $credit_id;

    /**
     *
     * @var integer
     */
    public $subLink_id;

    /**
     *
     * @var integer
     */
    public $recipient_user_id;

    /**
     *
     * @var integer
     */
    public $credit;

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
        $this->setSource("t-credit");
        $this->belongsTo('t-credit_id', 'Credit', 'credit_id', ['alias' => 'Credit']);
        $this->belongsTo('recipient_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('sub-link_id', 'Link', 'link_id', ['alias' => 'Link']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 't-credit';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TCredit[]|TCredit|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TCredit|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

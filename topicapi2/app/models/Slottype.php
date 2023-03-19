<?php

class Slottype extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $slottype_id;

    /**
     *
     * @var integer
     */
    public $participants;

    /**
     *
     * @var string
     */
    public $audienceallowed;

    /**
     *
     * @var integer
     */
    public $audienceincluded;

    /**
     *
     * @var string
     */
    public $audienceincreaseallowed;

    /**
     *
     * @var string
     */
    public $doesAllowFixedTime;

    /**
     *
     * @var string
     */
    public $canPurchasePrivate;

    /**
     *
     * @var string
     */
    public $canPurchasePaid;

    /**
     *
     * @var string
     */
    public $hasModerator;

    /**
     *
     * @var string
     */
    public $initialbuyoutprovided;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("slottype");
        $this->hasMany('slottype_id', 'Slot', 'slottype_id', ['alias' => 'Slot']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'slottype';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Slottype[]|Slottype|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Slottype|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

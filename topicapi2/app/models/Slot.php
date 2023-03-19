<?php

class Slot extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $slot_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var string
     */
    public $slotversion;

    /**
     *
     * @var string
     */
    public $slottype_id;

    /**
     *
     * @var string
     */
    public $slotaccessibility;

    /**
     *
     * @var string
     */
    public $isFixed;

    /**
     *
     * @var integer
     */
    public $audiencelimit;

    /**
     *
     * @var integer
     */
    public $buyoutpercentage;

    /**
     *
     * @var integer
     */
    public $costMonth;

    /**
     *
     * @var integer
     */
    public $costPrivate;

    /**
     *
     * @var integer
     */
    public $costPaid;

    /**
     *
     * @var integer
     */
    public $costFixedtime;

    /**
     *
     * @var integer
     */
    public $costPrimetime;

    /**
     *
     * @var integer
     */
    public $costAudienceplus;

    /**
     *
     * @var integer
     */
    public $costAudienceperstream;

    /**
     *
     * @var integer
     */
    public $costTotal;

    /**
     *
     * @var integer
     */
    public $day;

    /**
     *
     * @var integer
     */
    public $time;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("slot");
        $this->hasMany('slot_id', 'Slotbooking', 'slot_id', ['alias' => 'Slotbooking']);
        $this->belongsTo('slottype_id', 'Slottype', 'slottype_id', ['alias' => 'Slottype']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
        $this->belongsTo('user_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'slot';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Slot[]|Slot|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Slot|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

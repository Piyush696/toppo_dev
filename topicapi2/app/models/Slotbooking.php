<?php

class Slotbooking extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $slotbooking_id;

    /**
     *
     * @var integer
     */
    public $slot_id;

    /**
     *
     * @var integer
     */
    public $event_id;

    /**
     *
     * @var integer
     */
    public $booking_user_id;

    /**
     *
     * @var integer
     */
    public $removing_user_id;

    /**
     *
     * @var string
     */
    public $isActive;

    /**
     *
     * @var string
     */
    public $datetimebooked;

    /**
     *
     * @var string
     */
    public $datetimemodified;

    /**
     *
     * @var string
     */
    public $datetimeremoved;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("slotbooking");
        $this->hasMany('slotbooking_id', 'HEventoccurrence', 'slotbooking_id', ['alias' => 'HEventoccurrence']);
        $this->hasMany('slotbooking_id', 'HEventoccurrencedetail', 'slotbooking_id', ['alias' => 'HEventoccurrencedetail']);
        $this->belongsTo('booking_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('event_id', 'Event', 'event_id', ['alias' => 'Event']);
        $this->belongsTo('removing_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('slot_id', 'Slot', 'slot_id', ['alias' => 'Slot']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'slotbooking';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Slotbooking[]|Slotbooking|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Slotbooking|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

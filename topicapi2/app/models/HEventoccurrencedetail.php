<?php

class HEventoccurrencedetail extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $eventoccurrence_id;

    /**
     *
     * @var integer
     */
    public $slotbooking_id;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var string
     */
    public $userrole;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("h-eventoccurrencedetail");
        $this->belongsTo('user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('slotbooking_id', 'Slotbooking', 'slotbooking_id', ['alias' => 'Slotbooking']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'h-eventoccurrencedetail';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return HEventoccurrencedetail[]|HEventoccurrencedetail|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return HEventoccurrencedetail|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

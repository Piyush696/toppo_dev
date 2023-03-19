<?php

class HClaimthistopic extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $hClaimthistopic_id;

    /**
     *
     * @var integer
     */
    public $ctt_id;

    /**
     *
     * @var string
     */
    public $cttState_id;

    /**
     *
     * @var string
     */
    public $datetimeevent;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("h-claimthistopic");
        $this->belongsTo('ctt-state_id', 'Ctt-state', 'ctt-state_id', ['alias' => 'CttState']);
        $this->belongsTo('ctt_id', 'Ctt', 'ctt_id', ['alias' => 'Ctt']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'h-claimthistopic';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return HClaimthistopic[]|HClaimthistopic|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return HClaimthistopic|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

<?php

class HMessagecenter extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $hMessagecenter_id;

    /**
     *
     * @var integer
     */
    public $mcMessage_id;

    /**
     *
     * @var string
     */
    public $mcMessagestatus_id;

    /**
     *
     * @var string
     */
    public $statusoriginator;

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
        $this->setSource("h-messagecenter");
        $this->belongsTo('mc-message_id', 'Mc-message', 'mc-message_id', ['alias' => 'McMessage']);
        $this->belongsTo('mc-messagestatus_id', 'Mc-messagestatus', 'mc-messagestatus_id', ['alias' => 'McMessagestatus']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'h-messagecenter';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return HMessagecenter[]|HMessagecenter|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return HMessagecenter|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

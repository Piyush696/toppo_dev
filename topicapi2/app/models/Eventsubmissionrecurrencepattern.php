<?php

class Eventsubmissionrecurrencepattern extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $eventsubmissionrecurrencepattern_id;

    /**
     *
     * @var integer
     */
    public $eventsubmission_id;

    /**
     *
     * @var string
     */
    public $recurrencetype;

    /**
     *
     * @var integer
     */
    public $maxoccurrences;

    /**
     *
     * @var string
     */
    public $datetimesubmitted;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("eventsubmissionrecurrencepattern");
        $this->belongsTo('eventsubmission_id', 'Eventsubmission', 'eventsubmission_id', ['alias' => 'Eventsubmission']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'eventsubmissionrecurrencepattern';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventsubmissionrecurrencepattern[]|Eventsubmissionrecurrencepattern|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventsubmissionrecurrencepattern|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

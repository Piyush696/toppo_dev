<?php

class Eventtype extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $eventtype_id;

    /**
     *
     * @var string
     */
    public $eventsource;

    /**
     *
     * @var string
     */
    public $eventtype;

    /**
     *
     * @var string
     */
    public $showInDropdown;

    /**
     *
     * @var string
     */
    public $isCoded;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $features;

    /**
     *
     * @var string
     */
    public $category;

    /**
     *
     * @var string
     */
    public $categoryname;

    /**
     *
     * @var string
     */
    public $isRecorded;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("eventtype");
        $this->hasMany('eventtype_id', 'Event', 'eventtype_id', ['alias' => 'Event']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'eventtype';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventtype[]|Eventtype|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Eventtype|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

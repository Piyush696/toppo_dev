<?php

class McMessagestatus extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $mcMessagestatus_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $isLive;

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
        $this->setSource("mc-messagestatus");
        $this->hasMany('mc-messagestatus_id', 'HMessagecenter', 'mc-messagestatus_id', ['alias' => 'HMessagecenter']);
        $this->hasMany('mc-messagestatus_id', 'McMessagestatusresponsetime', 'finish_mc-messagestatus-id', ['alias' => 'McMessagestatusresponsetime']);
        $this->hasMany('mc-messagestatus_id', 'McMessagestatusresponsetime', 'start_mc-messagestatus-id', ['alias' => 'McMessagestatusresponsetime']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'mc-messagestatus';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return McMessagestatus[]|McMessagestatus|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return McMessagestatus|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

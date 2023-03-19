<?php

class Rejectionreason extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $rejectionreason_id;

    /**
     *
     * @var string
     */
    public $dropdowntext;

    /**
     *
     * @var string
     */
    public $defaultmessage;

    /**
     *
     * @var string
     */
    public $isPrejudicial;

    /**
     *
     * @var string
     */
    public $appliesto;

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
        $this->setSource("rejectionreason");
        $this->hasMany('rejectionreason_id', 'HTopicapplication', 'rejectionreason_id', ['alias' => 'HTopicapplication']);
        $this->hasMany('rejectionreason_id', 'McTemplate', 'rejectionreason_id', ['alias' => 'McTemplate']);
        $this->hasMany('rejectionreason_id', 'SubCalendar', 'rejectionreason_id', ['alias' => 'SubCalendar']);
        $this->hasMany('rejectionreason_id', 'SubFaq', 'rejectionreason_id', ['alias' => 'SubFaq']);
        $this->hasMany('rejectionreason_id', 'SubLink', 'rejectionreason_id', ['alias' => 'SubLink']);
        $this->hasMany('rejectionreason_id', 'SubSynonym', 'rejectionreason_id', ['alias' => 'SubSynonym']);
        $this->hasMany('rejectionreason_id', 'SubTag', 'rejectionreason_id', ['alias' => 'SubTag']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'rejectionreason';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Rejectionreason[]|Rejectionreason|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Rejectionreason|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

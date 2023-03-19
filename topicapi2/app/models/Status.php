<?php

class Status extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $status_id;

    /**
     *
     * @var string
     */
    public $status;

    /**
     *
     * @var integer
     */
    public $order;

    /**
     *
     * @var string
     */
    public $group;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $sendmessagemode;

    /**
     *
     * @var string
     */
    public $aTopic;

    /**
     *
     * @var string
     */
    public $aApplication;

    /**
     *
     * @var string
     */
    public $aSubmission;

    /**
     *
     * @var string
     */
    public $messageSubject;

    /**
     *
     * @var string
     */
    public $messageBody;

    /**
     *
     * @var string
     */
    public $sidebarPaneTopic;

    /**
     *
     * @var string
     */
    public $sidebarPaneEventTop;

    /**
     *
     * @var string
     */
    public $sidebarPaneEventBottom;

    /**
     *
     * @var string
     */
    public $sidebarButtonCreateevent;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("status");
        $this->hasMany('status_id', 'DCttIntrotab', 'status_id', ['alias' => 'DCttIntrotab']);
        $this->hasMany('status_id', 'DHomepage', 'status_id', ['alias' => 'DHomepage']);
        $this->hasMany('status_id', 'DToptabbar', 'status_id', ['alias' => 'DToptabbar']);
        $this->hasMany('status_id', 'HTopicapplication', 'status_id', ['alias' => 'HTopicapplication']);
        $this->hasMany('status_id', 'McTemplate', 'status_id', ['alias' => 'McTemplate']);
        $this->hasMany('status_id', 'SubCalendar', 'status_id', ['alias' => 'SubCalendar']);
        $this->hasMany('status_id', 'SubFaq', 'status_id', ['alias' => 'SubFaq']);
        $this->hasMany('status_id', 'SubLink', 'status_id', ['alias' => 'SubLink']);
        $this->hasMany('status_id', 'SubSynonym', 'status_id', ['alias' => 'SubSynonym']);
        $this->hasMany('status_id', 'SubTag', 'status_id', ['alias' => 'SubTag']);
        $this->hasMany('status_id', 'Topic', 'status_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'status';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Status[]|Status|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Status|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

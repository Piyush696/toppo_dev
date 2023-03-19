<?php

class TabLearnChild extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabLearnChild_id;

    /**
     *
     * @var integer
     */
    public $tabLearnMain_id;

    /**
     *
     * @var string
     */
    public $linkradiobutton;

    /**
     *
     * @var integer
     */
    public $link_id;

    /**
     *
     * @var string
     */
    public $linktype_id;

    /**
     *
     * @var integer
     */
    public $creator_user_id;

    /**
     *
     * @var integer
     */
    public $modifier_user_id;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     *
     * @var string
     */
    public $datetimemodified;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("tab-learn-child");
        $this->belongsTo('creator_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('link_id', 'Link', 'link_id', ['alias' => 'Link']);
        $this->belongsTo('linktype_id', 'Linktype', 'linktype_id', ['alias' => 'Linktype']);
        $this->belongsTo('modifier_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('tab-learn-main_id', 'Tab-learn-main', 'tab-learn-main_id', ['alias' => 'TabLearnMain']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab-learn-child';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabLearnChild[]|TabLearnChild|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabLearnChild|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

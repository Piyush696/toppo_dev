<?php

class Tabstrip extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabstrip_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var string
     */
    public $tab_id;

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
        $this->setSource("tabstrip");
        $this->hasMany('tabstrip_id', 'TabBlogMain', 'tabstrip_id', ['alias' => 'TabBlogMain']);
        $this->hasMany('tabstrip_id', 'TabFinderMain', 'tabstrip_id', ['alias' => 'TabFinderMain']);
        $this->hasMany('tabstrip_id', 'TabGuide', 'tabstrip_id', ['alias' => 'TabGuide']);
        $this->hasMany('tabstrip_id', 'TabHome', 'tabstrip_id', ['alias' => 'TabHome']);
        $this->belongsTo('creator_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('modifier_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('tab_id', 'Tab', 'tab_id', ['alias' => 'Tab']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tabstrip';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Tabstrip[]|Tabstrip|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Tabstrip|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

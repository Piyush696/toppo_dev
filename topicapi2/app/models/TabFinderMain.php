<?php

class TabFinderMain extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabFinderMain_id;

    /**
     *
     * @var integer
     */
    public $tabstrip_id;

    /**
     *
     * @var integer
     */
    public $subtaborder;

    /**
     *
     * @var string
     */
    public $subtab_tab_id;

    /**
     *
     * @var integer
     */
    public $creator_user_id;

    /**
     *
     * @var integer
     */
    public $admin_user_id;

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
     *
     * @var integer
     */
    public $wasClicked;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("tab-finder-main");
        $this->hasMany('tab-finder-main_id', 'TabFinderBook', 'tab-finder-main_id', ['alias' => 'TabFinderBook']);
        $this->hasMany('tab-finder-main_id', 'TabFinderWeb', 'tab-finder-main_id', ['alias' => 'TabFinderWeb']);
        $this->belongsTo('admin_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('creator_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('subtab_tab_id', 'Tab', 'tab_id', ['alias' => 'Tab']);
        $this->belongsTo('tabstrip_id', 'Tabstrip', 'tabstrip_id', ['alias' => 'Tabstrip']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab-finder-main';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabFinderMain[]|TabFinderMain|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabFinderMain|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

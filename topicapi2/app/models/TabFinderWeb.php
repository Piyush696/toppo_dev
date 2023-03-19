<?php

class TabFinderWeb extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabFinderWeb_id;

    /**
     *
     * @var integer
     */
    public $tabFinderMain_id;

    /**
     *
     * @var string
     */
    public $linktype_id;

    /**
     *
     * @var string
     */
    public $isActive;

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
        $this->setSource("tab-finder-web");
        $this->belongsTo('admin_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('creator_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('linktype_id', 'Linktype', 'linktype_id', ['alias' => 'Linktype']);
        $this->belongsTo('tab-finder-main_id', 'Tab-finder-main', 'tab-finder-main_id', ['alias' => 'TabFinderMain']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab-finder-web';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabFinderWeb[]|TabFinderWeb|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabFinderWeb|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

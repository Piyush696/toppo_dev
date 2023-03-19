<?php

class TabFinderBook extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabFinderBook_id;

    /**
     *
     * @var integer
     */
    public $tabFinderMain_id;

    /**
     *
     * @var string
     */
    public $title;

    /**
     *
     * @var string
     */
    public $descriptionShort;

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
     * @var string
     */
    public $descriptionLong;

    /**
     *
     * @var string
     */
    public $idIsbn10;

    /**
     *
     * @var string
     */
    public $idIsbn13;

    /**
     *
     * @var string
     */
    public $idLc;

    /**
     *
     * @var string
     */
    public $idOclc;

    /**
     *
     * @var string
     */
    public $idDd1;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("tab-finder-book");
        $this->belongsTo('admin_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('creator_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('tab-finder-main_id', 'Tab-finder-main', 'tab-finder-main_id', ['alias' => 'TabFinderMain']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab-finder-book';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabFinderBook[]|TabFinderBook|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabFinderBook|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

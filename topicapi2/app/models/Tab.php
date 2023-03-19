<?php
namespace App\Models;

class Tab extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $tab_id;

    /**
     *
     * @var string
     */
    public $parent_tab_id;

    /**
     *
     * @var string
     */
    public $isTop;

    /**
     *
     * @var string
     */
    public $tabname;

    /**
     *
     * @var string
     */
    public $tablename;

    /**
     *
     * @var integer
     */
    public $taborder;

    /**
     *
     * @var string
     */
    public $description;

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
        $this->setSource("tab");
        $this->hasMany('tab_id', 'HPageview', 'tab_id', ['alias' => 'HPageview']);
        $this->hasMany('tab_id', 'TabFinderMain', 'subtab_tab_id', ['alias' => 'TabFinderMain']);
        $this->hasMany('tab_id', 'Tabstrip', 'tab_id', ['alias' => 'Tabstrip']);
        $this->hasMany('tab_id', 'TopicTab', 'tab_id', ['alias' => 'TopicTab']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Tab[]|Tab|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Tab|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

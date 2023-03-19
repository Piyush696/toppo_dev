<?php

class TabHome extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabHome_id;

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
    public $subtabtitle;

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
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("tab-home");
        $this->belongsTo('admin_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('creator_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('tabstrip_id', 'Tabstrip', 'tabstrip_id', ['alias' => 'Tabstrip']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab-home';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabHome[]|TabHome|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabHome|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

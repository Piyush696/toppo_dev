<?php

class TabBlogChild extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $tabBlogChild_id;

    /**
     *
     * @var integer
     */
    public $tabBlogMain_id;

    /**
     *
     * @var string
     */
    public $title;

    /**
     *
     * @var string
     */
    public $body;

    /**
     *
     * @var integer
     */
    public $creator_user_id;

    /**
     *
     * @var integer
     */
    public $approver_user_id;

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
        $this->setSource("tab-blog-child");
        $this->belongsTo('approver_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('creator_user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('tab-blog-main_id', 'Tab-blog-main', 'tab-blog-main_id', ['alias' => 'TabBlogMain']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tab-blog-child';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabBlogChild[]|TabBlogChild|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return TabBlogChild|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

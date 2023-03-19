<?php

class Tag extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $tag_id;

    /**
     *
     * @var integer
     */
    public $admin_user_id;

    /**
     *
     * @var string
     */
    public $tagtext;

    /**
     *
     * @var string
     */
    public $tagname;

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
        $this->setSource("tag");
        $this->hasMany('tag_id', 'Autotaglinktype', 'tag_id', ['alias' => 'Autotaglinktype']);
        $this->hasMany('tag_id', 'LinkTag', 'tag_id', ['alias' => 'LinkTag']);
        $this->hasMany('tag_id', 'ProductTag', 'tag_id', ['alias' => 'ProductTag']);
        $this->hasMany('tag_id', 'ProductfeatureTag', 'tag_id', ['alias' => 'ProductfeatureTag']);
        $this->hasMany('tag_id', 'TopicTag', 'tag_id', ['alias' => 'TopicTag']);
        $this->belongsTo('admin_user_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'tag';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Tag[]|Tag|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Tag|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

<?php

class Productprofile extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $productprofile_id;

    /**
     *
     * @var integer
     */
    public $topic_id;

    /**
     *
     * @var string
     */
    public $productfield_id;

    /**
     *
     * @var integer
     */
    public $order;

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
        $this->setSource("productprofile");
        $this->hasMany('productprofile_id', 'Productattribute', 'productprofile_id', ['alias' => 'Productattribute']);
        $this->belongsTo('productfield_id', 'Productfield', 'productfield_id', ['alias' => 'Productfield']);
        $this->belongsTo('topic_id', 'Topic', 'topic_id', ['alias' => 'Topic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'productprofile';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Productprofile[]|Productprofile|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Productprofile|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}

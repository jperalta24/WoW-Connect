const router = require("express").Router();
const { User, Character, Post } = require("../../models");
const withAuth = require("../../utils/auth");